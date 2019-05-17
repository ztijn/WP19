<?php
/* Header */
$page_title = 'Webprogramming Assignment 3 - Leap Year';
$navigation = Array(
    'active' => 'Leap Year',
    'items' => Array(
        'News' => '/WP19/assignment_3/index.php',
        'Add news item' => '/WP19/assignment_3/news_add.php',
        'Leap Year' => '/WP19/assignment_3/leapyear.php',
        'Simple Form' => '/WP19/assignment_3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>
    <div class="row wp-row">
        <div class="col-md-12">
            <br>
            <h1>Welcome!</h1>
            <p>Please Enter your name, age, email and place of residence to find out what your age will be the next 5 leap years!</p>
            <form method="POST">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name">
                </div>
                <div class="form-group">
                    <label for="age">Age</label>
                    <input type="text" class="form-control" id="age" name="age" placeholder="Enter your age">
                </div>
                <div class="form-group">
                    <label for="name">Email address</label>
                    <input type="text" class="form-control" id="email" name="email" placeholder="Enter your email address">
                </div>
                <div class="form-group">
                    <label for="age">Place/residence</label>
                    <input type="text" class="form-control" id="place" name="place" placeholder="Enter your place of residence">
                </div>
                <button type="button" id="confirm" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>

    <script type="application/javascript" src="scripts/leapyear.js"></script>
<?php
include __DIR__ . '/tpl/body_end.php';
?>