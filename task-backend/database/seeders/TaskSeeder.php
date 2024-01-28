<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Task::create([
            'title' => 'Hacer la compra',
            'description' => 'Ir al supermercado y comprar alimentos y productos de primera necesidad.',
            'status' => 1, 
        ]);

        Task::create([
            'title' => 'Lavar el auto',
            'description' => 'Limpiar y lavar el automóvil por dentro y por fuera.',
            'status' => 1,
        ]);

        Task::create([
            'title' => 'Hacer ejercicio en casa',
            'description' => 'Realizar una sesión de ejercicios en casa para mantenerse en forma.',
            'status' => 2,
        ]);

        Task::create([
            'title' => 'Cocinar una nueva receta',
            'description' => 'Preparar una receta nueva y aprender nuevas habilidades culinarias.',
            'status' => 3,
        ]);

        Task::create([
            'title' => 'Leer un libro',
            'description' => 'Dedicar tiempo a la lectura y disfrutar de un buen libro.',
            'status' => 1,
        ]);

        Task::create([
            'title' => 'Organizar el armario',
            'description' => 'Ordenar y organizar la ropa y otros artículos en el armario.',
            'status' => 2,
        ]);

        Task::create([
            'title' => 'Ver una película',
            'description' => 'Disfrutar de una película en casa o en el cine.',
            'status' => 3,
        ]);

        Task::create([
            'title' => 'Practicar un hobby',
            'description' => 'Dedicar tiempo a practicar un pasatiempo o hobby que te gusta.',
            'status' => 1,
        ]);

        Task::create([
            'title' => 'Aprender un idioma',
            'description' => 'Dedicar tiempo a estudiar y practicar un nuevo idioma.',
            'status' => 2,
        ]);

        Task::create([
            'title' => 'Hacer voluntariado',
            'description' => 'Contribuir con la comunidad y ayudar a quienes lo necesitan mediante el voluntariado.',
            'status' => 1,
        ]);

        Task::create([
            'title' => 'Visitar a la familia',
            'description' => 'Pasas tiempo de calidad con la familia y compartes momentos especiales.',
            'status' => 3,
        ]);

        Task::create([
            'title' => 'Ir al médico',
            'description' => 'Realizar una consulta médica para revisión de salud o tratamiento.',
            'status' => 1,
        ]);

        Task::create([
            'title' => 'Planificar unas vacaciones',
            'description' => 'Organizar y planificar unas vacaciones para disfrutar y relajarse.',
            'status' => 2,
        ]);

        Task::create([
            'title' => 'Escuchar un podcast',
            'description' => 'Dedicar tiempo a escuchar un podcast sobre un tema de interés.',
            'status' => 3,
        ]);

        Task::create([
            'title' => 'Resolver un rompecabezas',
            'description' => 'Dedicar tiempo a resolver un rompecabezas o juego de ingenio.',
            'status' => 1,
        ]);
    }
}
