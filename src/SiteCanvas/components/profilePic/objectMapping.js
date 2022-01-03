import { MeshBasicMaterial } from "three";
import { Mesh, BoxGeometry } from "three";

function mapCube(textureData) {
    return new Mesh(new BoxGeometry(3,3,3), new MeshBasicMaterial({ map: textureData }));
}

export { mapCube };