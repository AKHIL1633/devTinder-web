# DevTinder

- Create a Vite + React application
- Remove the unnecessary code and create a Hello World app

- Tailwindcss trending framework
- Install  Tailwind CSS
- Install  Daisy Ui
- Add Navbar component  To App.jsx
- rafce - to creat dummy navbar dummy component
- Create a  NavBar seperate Component File
- Install react router dom

- Command to run 
- npm install react-router-dom
- npm i -D daisyui@latest
- npm install tailwindcss @tailwindcss/vite


- Body 
    - NavBar
      - Routes/ ==> Feed
      - Routes/login ==>Login
      - Route/connections ==> Connections
      - Route/profile  ==> Profile


-- Create BrowserRouter > Routes > Route=/Body>Route Children

- Create a login page 

- axios aur fetch to fetch the web api call 
- both  are same actually 
-cors error is at browser level 
- browser  will have this error 

-- call from localhost:5173/login
- POST http://localhost:7777/login net::ERR_CONNECTION_REFUSED
- we can pass this cors error from backend
- go to the  npm cors 
- or
- express cors middleware
- you use it as a middleware 
- axios dont set the cookies in the browser application 
- as it is not https 
- Cors - install core in backend => add middleware to
- with configurations: origin, crendentials:true
- Whenever you are making Api call so pass with - crendentials true

- if you dont pass this it will  throw an error 




