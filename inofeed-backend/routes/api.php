<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/posts', [PostController::class, 'index']);
Route::post('/posts', [PostController::class, 'store']);
Route::post('/posts/{id}/like', [PostController::class, 'like']);
Route::delete('/posts/{id}', [PostController::class, 'destroy']);