<?php

use Illuminate\Support\Facades\Route;

Route::view('/{any?}', 'dashboard')->where('any', '.*');
Route::post('login', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'store']);
