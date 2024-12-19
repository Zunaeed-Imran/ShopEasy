# ShopEasy
i will make a frontend and bacaend project. with laravel and react.

## project setup process.
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
