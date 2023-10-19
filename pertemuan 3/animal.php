<?php

# membuat class Animal
class Animal
{
    # property animals
    public $animals = [];

    # method constructor - mengisi data awal
    # parameter: data hewan (array)
    public function __construct($data)
    {
        $this ->animals = $data;
    }

    # method index - menampilkan data animals
    public function index()
    {
        echo "<ul";
        # gunakan foreach untuk menampilkan data animals (array)
        foreach($this->animals as $animal) {
            echo "<li>" . $animal . "</li>";
        }
        echo "</ul>";
    }

    # method store - menambahkan hewan baru
    # parameter: hewan baru
    public function store($data)
    {
        # gunakan method array_push untuk menambahkan data baru
        array_push($this->animals, $data);
    }

    # method update - mengupdate hewan
    # parameter: index dan hewan baru
    public function update($index, $data)
    {
        if (isset($this->animals[$index])) {
            $this->animals[$index] = $data;
        }
    }

    # method delete - menghapus hewan
    # parameter: index
    public function delete($index)
    {
        if (isset($this->animals[$index])) {
            unset($this->animals[$index]);
        }
    }
}

$aniaml = new Animal (["kuda", "kelinci"]);

echo "Index - Menampilkan seluruh hewan <br>";
$animal->index();
echo "<br>";

echo "Update - Menambahkan hewan Baru <br>";
$animal->store('burung');
$animal->index();
echo "<br>";

echo "Update - Mengupdate hewan <br>";
$animal->update(0, 'kucing anggora');
$animal->index();
echo "<br>";

echo "Destroy - Menghapus hewan <br>";
$animal->destroy(1);
$animal->index();
echo "<br>";