<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('banners', function (Blueprint $table) {
        $table->id(); // Tạo cột khóa chính tự động tăng
        $table->string('title'); // Cột title (chuỗi ký tự)
        $table->string('image'); // Cột image (chuỗi ký tự để lưu đường dẫn hình ảnh)
        $table->timestamps(); // Tạo các cột created_at và updated_at
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('banners');
    }
};
