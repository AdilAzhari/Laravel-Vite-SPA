<?php

use Illuminate\Support\Facades\Route;

Route::view('/{any?}', 'dashboard')->where('any', '.*');
