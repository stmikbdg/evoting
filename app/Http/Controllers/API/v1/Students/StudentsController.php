<?php

namespace App\Http\Controllers\API\v1\Students;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/**
 * Students Class
 * 
 * @author Rena wijaya <crashyvjaya@gmail.com>
 * @since 1.0.0
 * @version 1.0.1
 * @copyright 2022 Rena wijaya
 */
class StudentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $requestor = $request->user();

        if ($requestor->is_admin === 0) {
            return response()->json([
                'status'    =>  [
                    'code'  =>  401,
                    'description'   => 'Unauthorized'
                ]
            ], 401);
        }

        $q = $request->get('search');

        $students = DB::table('students')->join('study_programs', 'students.study_program_id', '=', 'study_programs.id');

        if ($q) {
            $students->where('students.name', 'like', '%' . $q . '%')->orWhere('student_number', 'like', '%' . $q . '%');
        }

        return response()->json([
            'status'    =>  [
                'code'  =>  200,
                'description'   =>  'OK'
            ],
            'results'   =>  $students->paginate(15, [
                'students.id as id',
                'study_programs.id as study_program_id',
                'student_number',
                'students.name',
                'study_programs.name as study_program_name',
                'students.created_at',
                'students.updated_at',
            ])->onEachSide(0)
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
        $requestor = $request->user();

        if ($requestor->is_admin === 0) {
            return response()->json([
                'status'    =>  [
                    'code'  =>  401,
                    'description'   =>  'Unauthorized'
                ]
            ], 401);
            die;
        }

        $this->validate($request, [
            'student_number'    =>  'required|numeric|unique:students',
            'name'  =>  'required|regex:/^[\pL\s\-]+$/u',
            'place_birth'   =>  'required',
            'date_birth'    =>  'required|date',
            'study_program_id'  =>  'required|numeric'
        ], [], [
            'student_number'    =>  'NIM',
            'name'  =>  'Nama Lengkap',
            'place_birth'   =>  'Tempat Lahir',
            'date_birth'    =>  'Tanggal Lahir',
            'study_program_id'  =>  'Program Studi'
        ]);

        DB::table('students')->insert([
            'study_program_id'  =>  $request->study_program_id,
            'student_number'    =>  $request->student_number,
            'name'  =>  strtoupper($request->name),
            'place_birth'   =>  strtoupper($request->place_birth),
            'date_birth'    =>  $request->date_birth,
            'created_at'    =>  now()
        ]);

        return response()->json([
            'status'    =>  [
                'code'  =>  201,
                'description'   =>  'Created'
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
        //
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
     * @param \Illuminate\Http\Request $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $requestor = $request->user();

        if ($requestor->is_admin === 0) {
            return response()->json([
                'status'    =>  [
                    'code'  =>  401,
                    'description'   =>  'Unauthorized'
                ]
            ], 401);
            die;
        }

        DB::table('students')->where('id', '=', $id)->delete();

        return response(null, 204);
    }

    public function getByStudentNumber(Request $request, $student_number)
    {
        $requestor = $request->user();

        if ($requestor->is_admin === 0) {
            return response()->json([
                'status'    =>  [
                    'code'  =>  401,
                    'description'   =>  'Unauthorized'
                ]
            ]);
            die;
        }

        $student = DB::table('students')->where('student_number', '=', $student_number)->first();
        $study_program = DB::table('study_programs')->where('id', '=', $student->study_program_id)->first();
        $user = DB::table('users')->where('student_id', '=', $student->id)->first();

        return response()->json([
            'status'    =>  [
                'code'  =>  200,
                'description'   =>  'OK'
            ],
            'results'   =>  [
                'student'   =>  $student,
                'study_program' =>  $study_program,
                'user'  =>  $user
            ]
        ]);
    }
}
