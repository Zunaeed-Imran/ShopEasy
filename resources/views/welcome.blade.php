<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet"> <!-- Optional: Link CSS -->
</head>
<body>
    <header>
        <h1>Welcome to My Laravel App!</h1>
    </header>
    <main>
        <p>This is a basic home page.</p>
    </main>
    <footer>
        <p>&copy; {{ date('Y') }} My Laravel App</p>
    </footer>
</body>
</html>
