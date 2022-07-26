import React from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

const automaticSave = async () => {
    const response = await fetch('/mocks/Products.json');
    const productosAGuardar = await response.json();

    productosAGuardar.forEach(async (producto) => {
        const docRef = await addDoc(collection(db, "products"), {
            title: producto.name,
            price: producto.price,
            category: producto.category,
            description: producto.description,
            image: producto.img,
            stock: 20,
        });
    })
}

export default automaticSave

