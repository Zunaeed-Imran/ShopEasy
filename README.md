# ShopEasy
i will make a Frontend and Backend project. with laravel and react.

### Laravel Project clone process
- composer update
- composer install
- setup the myql with .env file
- php artisan migrate
- php artisan db:seed
- if not working showing application key error `php artisan key:generate`

## project setup process with Laravel backend.
- `composer create-project laravel/laravel your-project-name`
- than run it `php artisan serve`
- if download from git-hub i should `composer update` than `composer i` than `npm i` than i can run it.

### project start process.
- first i `php artisan make:model Admin -msf`
- than make model `php artisan make:model Color -m`
- than make model `php artisan make:model Size -m`
- than make model `php artisan make:model Coupon -m`
- than make model `php artisan make:model Product -m`
- than make model `php artisan make:model Review -m`
- thank make model `php artisan make:model Order -m`
- added some more field in the users table.
- added some more field in the admin table.
- added some more filed in colors table.
- added some more filed in size table.
- added some more filed in coupon table.
- added some more filed in product table.
- added some more filed in the revied table.
- added some more filed in the order table.
- than we migrate `php artisan migrate`
- than from models 'Admin' replace all content form models-> 'User'
- than we add more content form model-> 'color.php' for many to many realationship.
- we also added relationship function in the models-> size.
- also make checkValid functiobn in the model-> coupon.
- added relationship function in the models-> order.
- added some function in the models-> porduct.
- added some function in models-> Review.
- added some function in models-> User.
- than create table `php artisan make:migration create_order_product_table`
- than create another table `php artisan make:migration create_color_product_table`
- than create another table `php artisan make:migration create_product_size_table`
- than added some foreign key in the product table order, size and color.
- than run migration `php artisan migrate`
- added some content in admin factory.
- added content on admin seeder and database seeder.
- than we seed `php artisan db:seed`
- than make controller in admin `php artisan make:controller \Admin\Controller`
- add content in the admin controller.
- than we run `php artisan make:request AuthAdminRequest`
- add some function and controller in "admincontroller".
- make it true in 'AuthAdminRequest'.
- in 'AuthAdminRequest' set email and password validation.
- in 'auth' file set Guards, providers, and password for 'admins'.
- Now we make Admin login page and index blade page.
- then we setup the route for admin login page.
- also added csrf token in the form.
- set the route as in the form (it was post).
- than we added @session and @endsesstion in the login page.
- than we make Adminmiddelware `php artisan make:middleware AdminMiddleware`
- than index blade file @extends admin layout app page added.
- than add a js file in public js file.
- than in app.blade file set asset for css and js file.
- than setup the dashboard frontend in index.blade file.
- than set the logout form in sidebar.blade and route in web file.
- #### than we work on 'color' 
- we make controller `php artisan make:controller \ColorController --model=Color`
- than edit ColorController and added some function.
- than make request `php artisan make:request AddColorRequest`
- than added some more function and request in colorController, updaten, show, store etc function.
- than make update request `php artisan make:request UpdateColorRequest`
- than set update request in the color controller in update function.
- than we see the lsit of route `php artisan route:list`
- than we set route for the colors.
- make it true in AddColorRequest and set return name unique.
- added some condation in updateColor controller using this to overwrite the require.
- working on making blade file for colors.
- for optimizing command in laravel 11 `php artisan optimize`
- using prefix() in route.
- i make mistake i don't migrate everything in the video with this command migrate the specific table `php artisan make:migration name_i_want` (but i don't use this command for now)
- add those migration i need and i mistalekly was not added those table [users, colors, size, coupons, product, review, orders.]
- than i run `php artisan migrate:refresh` and then run `php artisan db:seed` and it all working currectly.
- working on displaying the colors.
- working on color delete and facing error was 'route' not write in form.
- set foreach for id even if delete one.
- fix the error of the edit colors (UpdateColorRequest.php)
- #### working on Create update and delete on Size.
- we make controller `php artisan make:controller \SizeController --model=Size`
- than make request `php artisan make:request AddSizeRequest`
- than make update request `php artisan make:request UpdateSizeRequest`
- size controller added function.
- adding all function we need in request and updaterequest.
- added blade file for sizes.
- also added sweet alert in app.blade file for update and added a new.
- #### working on create update and delete on Coupons.
- make controller `php artisan make:controller \CouponController --model=Coupon`
- make request `php artisan make:request AddCouponRequest`
- make UpdateRequerst `php artisan make:request UpdateCouponRequest`
- controller, request, updateRequest added custom function and messages.
- making route for the coupons.
- making idnex.blade page for coupon.
- making create.blade page add validity set for only can start from after today.
- in model->coupon set the value to uppercase so that input value can store in upperCase.
- set validation condation in index page.
- in edit coupon i have facing problem in 'updateCouponrequest' and i added a rule function form Chat GPT, and then it worked.
- #### working on create update and delete product part 1.
- make controller `php artisan make:controller \ProductController --model=Product`
- make request `php artisan make:request AddProductRequest`
- make UpdateRequerst `php artisan make:request UpdateProductRequest`
- set route for products.
- in controller in store function set the image if empty also can added.
- controller have a problem with update need to fix.
- in controller making fucntion (create, store, edit, update, delete).
- #### working on create update and delete product part 2.
- making the blade file.
- set input form for images
- making some function for handleImageInputChange for image in app.blade file in the layout folder.
- in the form set enctype for image input.
- also after create a product i need link the image to show `php artisan storage:link`
- #### working on create update and delete product part 3.
- making the edit.blade file for product.
- in index.balde page set condation in 1st, 2nd, 3rd image 
- also delete wasn't working fix in the index.balde in product file
- #### working on API Product Controller and Routes.
- we make controller `php artisan make:controller Api/ProductController`
- we make resource `php artisan make:resource ProductResource`
- make some custon function in API Product controller.
- make api file `php artisan install:api` it want to migrate i have to write yes.
- after that i have to import 'HasApiTokens' in the User.php file.
- than make the first api route, then make the frontend.
## project setup process with React frontend.
- first setup the project with react vite `npm create vite@latest`
- than cd and then install npm.
- `npm i bootstrap bootstrap-icons react-router-dom axios react-toastify`
- some basic setup in the main.jsx file.
- make some component file.
- using axios and show data form backend server.
- also make config.js file for base url using axios.
- than work on ProductResource.php
- set condation fro instock and out of stock.(edit.blade->set radioButton, productListItem.jsx set condation = 1, productController set status)
- fix public function save image give / in the product controller and image name in update file.
- fix the edit page. the problem was i use () in foreachloop in blade file.
- fix the thumbnail preview when edit.
- fix the 1st, 2nd, 3rd image preview. (it was in the condation class !)
- finally found the problem of preview of create products (it was app.blade file after setAttribute i was give remove and for error it wasn't preview the image.)
- set the filtering option in home.jsx page.
- than install in frontend `npm i use-debounce` for using text field in search field.
- than we install `npm install react-loader-spinner --save` for page load show.
- set condation inProductList.jsx only can show 5 items.
- set load more button in productsList.jsx page.
- making single page view.
- also install `npm i html-to-react` for showing description styled description.
- also install `npm i react-image-gallery`
- working on add to card.
- install redux toolkit `npm install @reduxjs/toolkit`
- also install `npm install react-redux`
- than install `npm i redux-persist` for not go away data after refresh.
- redux is a state management library that "allow to have global state".
- make redux store file.
- make cart slice file.
- in main.jsx file add Provider and PersistGate fro redux.
- make the condation for add to cart in cartSlice.js file.
- than useDispatch() in product addTocart Button.
- set to redux only color.name and size.name.
- making cart file
- make condation for increment, decrement, remove cart in cartSlice.js file 
- `{JSON.stringify(item.size)}` with json srtingfy we can see the object data, when we debug.
- `{item.size?.name}` also can be show like that
- added remove cart option in Cart.jsx
- use 'accumulator' to see the total cart price.
- than we make UserController `php artisan make:controller Api/UserController`
- than make StoreUserRequest `php artisan make:request StoreUserRequest`
- also make auth user request `php artisan make:request AuthUserRequest`
- than make userResource `php artisan make:resource UserResource`
- set the api routes for users.
- also change all those new making file as needed.
- than work on the frontend users, make some file in component->user
- Registration and login page work in react.
- than make validation for react in custom folder.
- than make 'userSlice.js'.
- than working on the header link button set active or inActive button logic setup.
- have got some error when user logged in not showing the user(skip it for now).
- than make it in api folder `php artisan make:controller Api/CouponController`
- working on the component->coupon->Coupon.jsx
- make profile.jsx in user and working on it.
- useref() use in ProfileSidebar.jsx to use empty string after upload image.
- working on update userInfo file.
- set condation if user logout it redirect to login page (in profile and checkout page).
- make orderController `php artisan make:controller Api/OrderController`
### Payment Process.
- install Stripe for Payment Process. `composer require stripe/stripe-php`
- than make function for payment in the 'OrderController'
- than make acount in `stripe and also use API sECRET key in .env` file in my project
- from doc we have to install for //for the frontend 
- `npm install --save @stripe/react-stripe-js @stripe/stripe-js`
- than pest the provided code in CheckForm.jsx
- also pest the provided code in Stripe.jsx
- than set "publish" key from my own stripe account, in (Stripe.jsx) file
### Again working on backend.
- make controller in admin file, `php artisan make:controller Admin/OrderController`
- make resource `php artisan make:resource OrderResource`
- make necessary function in controller.
- working on backend API.
- make Orders blade index file.
- make UserOrder.jsx page for to show user orders.
- after we work on review product in Product.jsx file
- make review folder and review component and use it in product.jsx file.
- install react rating package in frontend `npm i react-simple-star-rating`
- we use useContext() react in review.
- than make controller for review `php artisan make:controller Api/ReviewController`
- than make controller in Api `php artisan make:controller Admin/ReviewController`
- after making necessary function in the controller, set web route for reviews.
- than make balde file for review.
- set condation in api review controller for delete.
- in review list item component make functionality for delete review.
- making condation of average review of products.
- showing single product average product.
- set condation if product havn't any review won't show any review star.
- set condation if product has not any review in all products item won't how star if have will show the review star.
- set condation in review if user don't have the product can't review the product.

### Enhancement list from group meeting.
- multiple admin for project backend(will think about it).

##### Work done list for the week.
- watch some basic docker tutorial and document.
- change the styled of the delivered button.
- confirm button pop-up setting.
- have some error while pop up button set-up and fix it.
- prevent price range filter (-1) cannot be less than zero.
- all filter can work together all at once.
- material UI basic tutorial and document.
- practice basic programming function loop condation etc.
- new product for admin showing.
- also got some error on it and fix it.
- new product showing on front-end react for the user.
- show single product show new product too.
- make gitLab account and familiar with it.
- 