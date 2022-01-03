import { TextureLoader } from "three";


async function loadProfilePic() {
    const loader = new TextureLoader();

    const [ristretto] = await Promise.all([
        loader.loadAsync("/assets/RistrettoHeadshot.png")
    ]);
    return { ristretto }

}

export {loadProfilePic}