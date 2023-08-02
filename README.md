## Purpose :    
###  Calculate petrol cost for business trips

#### www/template/startPoint.html
![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/74f8d075-30ef-48df-871a-9fa2c70c868f)


#### www/templates/endpoint.html
![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/043b044f-2388-4ae4-9917-c97963fcaa1b)

#### •	The total petrol cost for today’s trip
![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/8f24ec43-44ad-42e9-98db-5fcf3d99cf7d)

#### Given start and end location , the App help claiming petrol costs for business trips by calculating the petrol prices.

####	. Can store mileage in mobile when no Wi Fi, then synchronize to cloud DB when has Wi Fi
####	. The Rat website was hosted on:              AWS EC2 server
####	. The Rat mobile version was uploaded to:     Google Play store


	
## Prerequisite installation:
####	. node.js                           —Back end
####	. npm
####	. angular dependencies              –Web framework
####	.ionic   




##  Project Tree




## Rat Modules is as below:


![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/6534d4ac-8f31-4a4a-b3d7-1ba81e2ad13d)




## Solution Architect


![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/3bbf3ed0-cea9-458e-a98d-6a5f8aa78ea8)



•	System was designed based on MVC Model-View-Controller Architect: 



##  Controller


 
####   A Controller and a view is One-to-One mapping. 

####  The Rat provisions controller in www/js/app.js  to handle mileage , trips data in front end html pages. 
 
####  For example:





#### www/js/app.js: 


![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/418536ad-d8a7-4291-b645-f969d0216a17)





####	. The above ‘startPointCtrl’ controller handle starting address, starting 
Petrol reading… data flow, and render the Html page—Views
 
####	.  App.js has several controllers to handle data and render html page,e.g: Trip_details.html



##      Views

#### •	Controllers render html pages which are Views stored in :www/templates

#### www/template/startPoint.html


![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/2c96d08c-4163-4cfa-80c8-5b900bfca944)



#### www/templates/endpoint.html



![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/f005de0e-d0dc-441c-a39b-fcf933af2a5f)




#### •	The total petrol cost for today’s trip
www/templates/ countCost.html
![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/df40ec66-42d1-4f70-8738-f709e2b469ac)





#### •	The records list of Trips
#### www/templates/history.html



#### •	Controller can integrate with Model to update the records of trips


#### www/templates/history.html 


![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/e9a0b199-5f74-41e2-9b1b-09b641a56ce3)




##      Model

#### •	The Rat leverage Service to implement Model for mileage and trips data CRUD.





#### www/js/app.js

![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/61c83cc9-0929-4185-8622-322b54d12155)



#### •	The above ‘TripService’ store data in localStorage. TripService can update and delete trips related data. 







