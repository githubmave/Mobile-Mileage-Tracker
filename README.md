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

![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/b73094a3-01ef-42f6-bc7e-0ffd9c907f49)



## Rat Modules is as below:


![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/292d9c33-2e32-4484-8756-4df81a0b068f)





## Solution Architect


![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/15aedf82-d68a-4f5c-b70a-0ab93c8bb4fa)



•	System was designed based on MVC Model-View-Controller Architect: 



##  Controller


 
####   A Controller and a view is One-to-One mapping. 

####  The Rat provisions controller in www/js/app.js  to handle mileage , trips data in front end html pages. 
 
####  For example:





#### www/js/app.js: 


![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/f75f19c0-7cd5-4d60-862f-7d37a285e98e)





####	. The above ‘startPointCtrl’ controller handle starting address, starting 
Petrol reading… data flow, and render the Html page—Views
 
####	.  App.js has several controllers to handle data and render html page,e.g: Trip_details.html



##      Views

#### •	Controllers render html pages which are Views stored in :www/templates

#### www/template/startPoint.html


![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/3503e963-09fa-444d-886b-21894132b981)



#### www/templates/endpoint.html



![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/f005de0e-d0dc-441c-a39b-fcf933af2a5f)




#### •	The total petrol cost for today’s trip
www/templates/ countCost.html
![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/0b6b5f8c-e9c6-4f23-97a5-25815de3b70b)





#### •	The records list of Trips
#### www/templates/history.html



#### •	Controller can integrate with Model to update the records of trips


#### www/templates/history.html 


![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/8d13dd80-9b98-42a9-941b-4dab0a49b3c0)




##      Model

#### •	The Rat leverage Service to implement Model for mileage and trips data CRUD.





#### www/js/app.js

![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/e8a032cc-5002-42a4-81f6-04eb5d6d6885)



#### •	The above ‘TripService’ store data in localStorage. TripService can update and delete trips related data. 







