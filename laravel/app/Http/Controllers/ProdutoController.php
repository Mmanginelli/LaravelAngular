<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProdutoRequest;
use App\Http\Requests\UpdateProdutoRequest;
use Illuminate\Http\Request;

use App\Models\Produto; // IMPORTAÇÃO DO MODEL

class ProdutoController extends Controller
{
    // GET Retorna todos os produtos - api/produtos
    public function index()
    {
        return response()->json(Produto::all());
    }

    // POST Insere um produto - api/produtos
    public function store(StoreProdutoRequest $request)
    {
        $produto = Produto::create($request->validated());
        return response()->json($produto, 201);
    }

    // GET Ver detalhes do um produto  - api/produtos/1
    public function show(string $id)
    {
        $produto = Produto::find($id);
        return response()->json($produto);
    }

    // PUT Atualiza um produto - api/produtos
    public function update(UpdateProdutoRequest $request, Produto $produto)
    {
        $produto->update($request->validated());
        return response()->json($produto);
    }

    // DELETE Apaga um produto - api/produtos/1
    public function destroy(Produto $produto)
    {
        $produto->delete();
        return response()->json([
            'message' => 'Produto excluído com sucesso'
        ]);
    }
}