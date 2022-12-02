import app from "./app"
import { getAllCharacters } from './endpoints/getAllCharacters';
import { createCharacter } from './endpoints/createCharacters';
import {deleteCharacter} from './endpoints/deleteCharacter';



app.get("/character", getAllCharacters);
app.put("/character", createCharacter);
app.delete("/character/:id",deleteCharacter)