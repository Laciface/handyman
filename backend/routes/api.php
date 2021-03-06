<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\WorkerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('login', [UserController::class, 'login'])->name('auth.login');

Route::post('registration',[UserController::class, 'registration']);



Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('worker',[WorkerController::class, 'addNewWorker']);
    Route::get('workers',[WorkerController::class, 'selectSpecificWorkers']);
    Route::get('district',[WorkerController::class, 'selectSpecificWorkersByDistrict']);
    Route::get('userbyid', [UserController::class, 'getUserByID']);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
