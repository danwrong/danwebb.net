import noise from './noise-map'

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const texture = new THREE.CanvasTexture(canvas);
texture.wrapS = THREE.ClampToEdgeWrapping;
texture.wrapT = THREE.ClampToEdgeWrapping;
const material = new THREE.MeshBasicMaterial({map: texture});

AFRAME.registerComponent('noise', {
    schema: {
        height: { default: 256, type: 'int' },
        width: { default: 256, type: 'int' },
        offset: { default: 100 },
        scale: { default: 100 }
    },
  
    // update: function () {
    //     let {height, width, scale, offset} = this.data
    //     let map = noise(width, height, scale, offset, offset, 4, 0.5, 2.5)

    //     canvas.width = width;
    //     canvas.height = height;

    //     const imageData = ctx.createImageData(width, height);

    //     for (let i = 0; i < map.length; i++) {
    //         let greyVal = Math.ceil(255 * ((map[i] + 1) / 2));
    //         let igIndex = i * 4;
    //         imageData.data[igIndex] = greyVal;
    //         imageData.data[igIndex + 1] = greyVal;
    //         imageData.data[igIndex + 2] = greyVal;
    //         imageData.data[igIndex + 3] = 255;
    //     }

    //     ctx.putImageData(imageData, 0, 0);

    //     this.el.getObject3D('mesh').material = material;
    //     texture.needsUpdate = true;
    // }
    update: function() {
        let {height, width, scale, offset} = this.data
        let map = noise(width, height, scale, offset, offset, 4, 0.5, 2.5)

        let geo = new THREE.PlaneBufferGeometry(this.el.getAttribute('width'), this.el.getAttribute('height'), height - 1, width - 1)
        let vertices = geo.getAttribute('position').array;

        for (var i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3) {
            vertices[j + 2] = map[i] * this.el.getAttribute('height') * 0.1;
        }

        this.el.getObject3D('mesh').geometry = geo;

        canvas.width = width;
        canvas.height = height;

        const imageData = ctx.createImageData(width, height);

        for (let i = 0; i < map.length; i++) {
            let greyVal = Math.ceil(255 * ((map[i] + 1) / 2));
            let igIndex = i * 4;
            imageData.data[igIndex] = greyVal / 4;
            imageData.data[igIndex + 1] = 0;
            imageData.data[igIndex + 2] = 0;
            imageData.data[igIndex + 3] = 255;
        }

        ctx.putImageData(imageData, 0, 0);

        this.el.getObject3D('mesh').material = material;
        texture.needsUpdate = true;
    }
})

