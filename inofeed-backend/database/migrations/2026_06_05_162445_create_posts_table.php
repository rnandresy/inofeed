<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }

    /**
     * Run the migrations.
     */
    

    public function up(): void
    {
    Schema::create('posts', function (Blueprint $table) {
        $table->id();
        $table->string('username');
        $table->text('content');
        $table->integer('likes')->default(0);
        $table->timestamps(); // Gère le created_at et updated_at automatiquement
    });
    }
};
