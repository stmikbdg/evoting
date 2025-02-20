<?php

namespace App\Http\Controllers\API\v1\Candidates;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/**
 * Candidates Class
 * 
 *
 * 
 * @author Rena wijaya <crashyvjaya@gmail.com>
 * @since 1.0.0
 * @version 1.0.1
 * @copyright 2022 Rena wijaya
 */
 
class CandidatesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $candidates = Candidate::with('student', 'student.study_program')->get();

        return response()->json([
            'status'    =>  [
                'code'  =>  200,
                'description'   =>  'OK'
            ],
            'results'   =>  $candidates
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'id'    =>  'required|numeric',
            'description'   =>  'required',
            'color' =>  'required',
        ]);

        $requestor = $request->user();

        if ($requestor->is_admin === 0) {
            return response()->json([
                'status'    =>  [
                    'code'  =>  401,
                    'description'   =>  'Unauthorized'
                ]
            ], 401);
        }

        $hex = $request->color;
        list($r, $g, $b) = sscanf($hex, "#%02x%02x%02x");

        DB::table('candidates')->insert([
            'student_id'    =>  $request->id,
            'description'   =>  $request->description,
            'score' =>  0,
            'color' => "$r, $g, $b",
            'is_disqualified'   =>  0,
            'created_at'    =>  now()
        ]);

        return response()->json([
            'status'    =>  [
                'code'  =>  201,
                'description'   =>  'Created',
                'message'   =>  'Kandidat berhasil dibuat.'
            ]
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $candidates = Candidate::with('student', 'student.study_program')->where('id', '=', $id)->first();
        // sleep(5);
        return response()->json([
            'status'    =>  [
                'code'  =>  200,
                'description'   =>  'OK'
            ],
            'results'   =>  [
                'candidates'    =>  $candidates,
            ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
