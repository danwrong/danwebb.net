import SimplexNoise from 'simplex-noise'

let noise = new SimplexNoise()
let octaveOffsets = [];
const maxOctaves = 10;

for (let i=0; i < maxOctaves; i++) {
    octaveOffsets.push(Math.random() * 10000 - 5000)
}

function noiseMap(width, height, scale, offsetX, offsetY, octaves, persistance, lacunarity) {
    let map = []

    for (let x = offsetX; x < offsetX + width; x++) {
        for (let y = offsetY; y < offsetY + height; y++) {
            let height = 0, amp = 1.0, freq = 1.0

            for (let o = 0; o < octaves; o++) {
                let val = noise.noise2D((x + octaveOffsets[o]) / scale * freq, y / scale * freq)
                height += val * amp

                amp *= persistance
                freq *= lacunarity
            }

            map.push(height)
        }
    }

    return map

}

export default noiseMap