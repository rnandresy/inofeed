<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index() {
        return response()->json(Post::latest()->get(), 200);
    }

    public function store(Request $request) {
        $request->validate([
            'username' => 'required|string|max:50',
            'content' => 'required|string|max:280',
        ]);
        $post = Post::create([
            'username' => $request->username,
            'content' => $request->content,
        ]);
        return response()->json($post, 201);
    }

    // Incrémenter les likes
    public function like($id) {
        $post = Post::findOrFail($id);
        $post->increment('likes');
        return response()->json($post, 200);
    }

    // Supprimer un post
    public function destroy($id) {
        $post = Post::findOrFail($id);
        $post->delete();
        return response()->json(['message' => 'Post supprimé !'], 200);
    }
}