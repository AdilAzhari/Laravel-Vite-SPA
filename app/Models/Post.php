<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
class Post extends Model
{
    use HasFactory, HasApiTokens;
    protected $fillable = ['title', 'content', 'category_id'];
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
