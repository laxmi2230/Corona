from flask import Flask, jsonify, request 
from flask_cors import CORS 
import pymongo 
import wget
import pathlib
import os,json
import numpy as np
import keras
from keras.layers import *
from keras.models import *
from keras.preprocessing import image
from keras.models import load_model
import tensorflow as tf
tf.get_logger().setLevel('ERROR')

def predict(file_name):
	model=load_model(".\\model_covid.h5")
	img=image.load_img(".\\Test\\"+file_name,target_size=(224,224))
	img=image.img_to_array(img)
	img=np.expand_dims(img,axis=0)
	pred=model.predict_classes(img)
	prediction='Covid Negative'
	if pred[0,0]==0:
		prediction='Covid Positive'
	response={
		'value':prediction,
		'file_name':file_name
	}
	return response

def Get_Filename():
	flist = []
	for p in pathlib.Path('.\\Test\\').iterdir():
	    if p.is_file():
	    	x = str(p).split("\\")[-1]
	    	flist.append(x)
	return flist

connection_url = 'mongodb+srv://dbUser:molu@cluster0.wz4ci.mongodb.net/<dbname>?retryWrites=true&w=majority'
client = pymongo.MongoClient(connection_url) 

Database = client.get_database('<dbname>') 
# Table 
SampleTable = Database.users
# To find the first document that matches a defined query, 
# find_one function is used and the query to match is passed 
# as an argument. 
#@app.route('/find-one/<argument>/<value>/', methods=['GET']) 
def findOne(argument, value): 
	queryObject = {argument: value} 
	query = SampleTable.find_one(queryObject) 
	query.pop('_id')
	return jsonify(query) 

# To find all the entries/documents in a table/collection, 
# find() function is used. If you want to find all the documents 
# that matches a certain query, you can pass a queryObject as an 
# argument. 
#@app.route('/find/', methods=['GET']) 
def findAll(): 
	query = SampleTable.find() 
	output = {} 
	i = 0
	for x in query: 
		output[i] = x 
		output[i].pop('_id') 
		i += 1
	array = []
	dict = output
	for i in dict.keys():
		array.insert(i,dict[i]['imageurl'])
	prediction='NOT UPLOADED!!!'
	for i in range(0,len(array)):
		file_name=array[i].split('/')[-1]
		image_url =array[i]
		if file_name not in Get_Filename():
			image_filename = wget.download(image_url,'.\\Test')
			prediction=predict(file_name) 
	if prediction=='NOT UPLOADED!!!':
		print(json.dumps({'value':'Not Uploaded!!!'})) 
	else:
		print(json.dumps(prediction)) 

if __name__ == '__main__': 
	#app.run(debug=True) 
	findAll()
