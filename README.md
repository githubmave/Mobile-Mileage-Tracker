## Purpose :     
###  Calculate petrol cost of business trips, for accounting claim. 

#### www/template/startPoint.html
![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/74f8d075-30ef-48df-871a-9fa2c70c868f)


#### www/templates/endpoint.html
![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/043b044f-2388-4ae4-9917-c97963fcaa1b)

#### The total petrol cost for today’s trip
![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/8f24ec43-44ad-42e9-98db-5fcf3d99cf7d)


#### •	The records list of Trips
#### www/templates/history.html

![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/462aba35-9efa-4b0c-ad4d-12f841f96eb4)


####  Users can edit and delete of trips

![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/eab29c43-3b46-496d-9d2d-293303d7ee77)


### Given start and end location , the App calculates petrol cost, records business trips,  updata the trips
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    . Can store mileage in mobile when no Wi Fi, then synchronize to cloud DB when has Wi Fi
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    . The App website was hosted on:              AWS EC2 server
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    . The App mobile version was uploaded to:     Google Play store


	
## Prerequisite installation:
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . node.js                          
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . npm
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . angular dependencies            
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . ionic   




##  Main Packages
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . UI:      &nbsp;&nbsp;&nbsp;&nbsp;   ionic-- Mobile Native
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . Front end: &nbsp;&nbsp;&nbsp;&nbsp;     angular,  angular-ui-router
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . Back end: &nbsp;&nbsp;&nbsp;&nbsp;      ngStorage
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . Data storage:  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;   pouchDB API for saving dato into couchDB via HTTP
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . Tools: &nbsp;&nbsp;&nbsp;&nbsp;   Cordova Build for Mobile App, Use bower for package management 




## Mileage Modules: :


![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/292d9c33-2e32-4484-8756-4df81a0b068f)








## Solution Architect
### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  System based on MVC Model-View-Controller Architect: 


![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/40f32628-2309-45bb-8fc0-814dbdb9c99f)







##  Use case to illustrates Data Flow from Front end_To_Back end_to DB 

####  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Users enter and submit meter reading

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Step one: 

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Views:     www/template/startPoint.html

![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/6ec4c053-f6bb-4654-8304-6dfc0939cf00)


####  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Step Two:


####  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Controller:         www/js/app.js

 
####   A Controller and a view is One-to-One mapping. 

####  The App provisions controller in www/js/app.js  to handle mileage , trips data in front end html pages. 
 
####  For example:





#### www/js/app.js: 




![image](https://github.com/githubmave/Mobile-Mileage-Tracker/assets/8073738/efed8999-57be-4488-b5f8-6ea5b6b52d39)

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Step three: 
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Use pouchDB API to save meter reading to cloud-based couchDB when have internet connection

























