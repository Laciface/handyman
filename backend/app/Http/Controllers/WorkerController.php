<?php

namespace App\Http\Controllers;

use App\Models\Worker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class WorkerController extends Controller
{
    public function addNewWorker(Request $request){
        try{
            $worker = new Worker();
            $worker->name = $request->name;
            $worker->email = $request->email;
            $worker->specialization = $request->specialization;
            $worker->phone_number = $request->phone_number;
            $worker->district = $request->district;
            $worker->save();

            return response()->json([
                'worker' => $worker,
            ], 200);

        }catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json(['message' => "Something went wrong"], 400);
        }
    }

    public function selectSpecificWorkers(Request $request){
        try{
            $workers = Worker::where('specialization', $request->specializaton)->get();

            return response()->json([
                'workers' => $workers
            ], 200);

        }catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json(['message' => "Something went wrong"], 400);
        }
    }
}
