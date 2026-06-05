<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    // Ajoute cette ligne pour autoriser Laravel à remplir ces colonnes :
    protected $fillable = ['username', 'content','likes'];
}