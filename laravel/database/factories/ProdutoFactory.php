<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Produto>
 */
class ProdutoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nome'  => $this->faker->name(),
            'foto'  => $this->faker->imageUrl(640, 480, 'products'),
            'preco' => $this->faker->randomFloat(2, 10, 500), // Ex: entre R$ 10,00 e R$ 500,00
        ];
    }
}
