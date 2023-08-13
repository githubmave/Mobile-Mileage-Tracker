## Purpose :   
+ ##### &nbsp;&nbsp;&nbsp;&nbsp;  The following is:  &nbsp;&nbsp;&nbsp;&nbsp;  A) Map for this system 's architect
  ##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  B)  Data Flow Chart for one use case
+ #####  &nbsp;&nbsp;&nbsp;&nbsp;  This App is to calculate petrol cost for business trips, for accountant purpose


*  ##### www/template/startPoint.html
![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/74f8d075-30ef-48df-871a-9fa2c70c868f)


*  ##### www/templates/endpoint.html
![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/043b044f-2388-4ae4-9917-c97963fcaa1b)

*  ##### The total petrol cost for today’s trip
![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/8f24ec43-44ad-42e9-98db-5fcf3d99cf7d)

	
* ##### records : www/templates/history.html

![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/462aba35-9efa-4b0c-ad4d-12f841f96eb4)


*  ##### Users can edit and delete of trips

![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/eab29c43-3b46-496d-9d2d-293303d7ee77)


### Given start and end location , the App calculates petrol cost, records business trips,  updata the trips
*  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     Can store mileage in mobile when no Wi Fi, then synchronize to cloud DB when has Wi Fi
*  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     The App website was hosted on:              AWS EC2 server
*  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    The App mobile version was uploaded to:     Google Play store


####  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 	
## Prerequisite installation:
*  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  node.js                          
*  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  npm
*  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  angular dependencies            
*  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ionic   




##  Main Packages
* ##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  UI:      &nbsp;&nbsp;&nbsp;&nbsp;   ionic-- Mobile Native
* ##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Front end: &nbsp;&nbsp;&nbsp;&nbsp;     angular,  angular-ui-router
* ##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Back end: &nbsp;&nbsp;&nbsp;&nbsp;      ngStorage
* ##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Data storage:  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;   pouchDB API for saving dato into couchDB via HTTP
* ##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Tools: &nbsp;&nbsp;&nbsp;&nbsp;   Cordova Build ,  bower 



####  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 	

## Mileage Modules: :


![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/292d9c33-2e32-4484-8756-4df81a0b068f)





 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 	
	



## Solution Architecture
* ##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  System based on MVC Model-View-Controller Architect: 


![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/82a4d82d-c6d7-4b93-9c9f-36bf9cada1ff)



####  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 	
####  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 	




##  Use  Meter Data  to illustrates Data Flow from Front end To -> Back end To -> DB 

* ######  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Users enter and submit meter reading

#### Step one: 

* ###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Views:     www/template/startPoint.html

![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/1e26887f-2ded-4ce0-992c-0497bfc3f745)

 
####   Step Two:


* ######  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Controller:         www/js/app.js


  ![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/b04edb23-4ce8-4880-aff1-f740d1a9f6db)
 
   

 ## A Controller and a view is One-to-One mapping. 
* ##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; www/js/app.js
![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/c44798a8-c976-4fce-b997-1a65002faa76)

 































