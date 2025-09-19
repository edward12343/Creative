// Tab functionality for About section
var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link")
  }
  for (var j = 0; j < tabcontents.length; j++) {
    tabcontents[j].classList.remove("active-tab")
  }
  event.target.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab")
}


// Mobile menu functionality
function openmenu() {
  console.log("[v0] Opening mobile menu")
  const sidemenu = document.querySelector("nav ul")
  const hamburger = document.querySelector(".fas.fa-bars")

  if (sidemenu) {
    sidemenu.style.right = "0"
    sidemenu.classList.add("open")
    console.log("[v0] Mobile menu opened - navigation items should be visible")

    // Hide hamburger icon when menu is open
    if (hamburger) {
      hamburger.style.opacity = "0.5"
    }
  } else {
    console.log("[v0] Nav ul element not found")
  }
}

function closemenu() {
  console.log("[v0] Closing mobile menu")
  const sidemenu = document.querySelector("nav ul")
  const hamburger = document.querySelector(".fas.fa-bars")

  if (sidemenu) {
    sidemenu.style.right = "-250px"
    sidemenu.classList.remove("open")
    console.log("[v0] Mobile menu closed")
    
    // Show hamburger icon when menu is closed
    if (hamburger) {
      hamburger.style.opacity = "1"
    }
  } else {
    console.log("[v0] Nav ul element not found")
  }
}

window.addEventListener("load", () => {
  console.log("[v0] Window loaded, mobile menu functions ready")

    // Test if hamburger icon exists and make it more visible
  const hamburger = document.querySelector(".fas.fa-bars")
  if (hamburger) {
    console.log("[v0] Hamburger icon found and enhanced")
    hamburger.style.display = "block"
    hamburger.style.visibility = "visible"

    // Add click event listener as backup
    hamburger.addEventListener("click", openmenu)
  } else {
    console.log("[v0] Hamburger icon not found")
  }

  // Test if mobile menu exists
  const mobileMenu = document.querySelector("nav ul")
  if (mobileMenu) {
    console.log("[v0] Mobile menu found")
    
    // Add close button event listener as backup
    const closeBtn = mobileMenu.querySelector(".fas.fa-times")
    if (closeBtn) {
      closeBtn.addEventListener("click", closemenu)
      console.log("[v0] Close button event listener added")
    }
  } else {
    console.log("[v0] Mobile menu not found")
  }
})

// RUBIK'S CUBE
;(() => {
  const canvasDiv = document.getElementById("rubiks-canvas")
  if (!canvasDiv) return
  const width = canvasDiv.clientWidth, height = canvasDiv.clientHeight
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
  camera.position.set(0, 0, 7)
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  canvasDiv.appendChild(renderer.domElement)
  const dirLight = new THREE.DirectionalLight(0xffffff, 1)
  dirLight.position.set(5, 5, 5)
  scene.add(dirLight, new THREE.AmbientLight(0x555555))
  const colors = [0xff0000,0xffff00,0x00ff00,0x0000ff,0xffa500,0xffffff]
  const cubeSize = 0.95, spacing = 1.05
  for (let x=-1;x<=1;x++)for(let y=-1;y<=1;y++)for(let z=-1;z<=1;z++){
    const geometry = new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize)
    const materials = colors.map(c=>new THREE.MeshStandardMaterial({color:c}))
    const cube = new THREE.Mesh(geometry,materials)
    cube.position.set(x*spacing,y*spacing,z*spacing)
    scene.add(cube)
  }
  function animate(){scene.rotation.y+=0.005;renderer.render(scene,camera);requestAnimationFrame(animate)}
  animate()
})()

// SNOWMAN
;(() => {
  const canvasDiv=document.getElementById("snowman-canvas")
  if(!canvasDiv)return
  const width=canvasDiv.clientWidth,height=canvasDiv.clientHeight
  const scene=new THREE.Scene()
  const camera=new THREE.PerspectiveCamera(50,width/height,0.1,1000)
  camera.position.set(0,2,7)
  camera.lookAt(0,2,0)
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true})
  renderer.setSize(width,height)
  canvasDiv.appendChild(renderer.domElement)
  const dirLight=new THREE.DirectionalLight(0xffffff,1)
  dirLight.position.set(5,5,5)
  scene.add(dirLight,new THREE.AmbientLight(0x555555))
  const bodyMat=new THREE.MeshStandardMaterial({color:0xffffff})
  const bottom=new THREE.Mesh(new THREE.SphereGeometry(1,32,32),bodyMat)
  bottom.position.y=1;scene.add(bottom)
  const middle=new THREE.Mesh(new THREE.SphereGeometry(0.7,32,32),bodyMat)
  middle.position.y=2.3;scene.add(middle)
  const head=new THREE.Mesh(new THREE.SphereGeometry(0.5,32,32),bodyMat)
  head.position.y=3.3;scene.add(head)
  const eyeMat=new THREE.MeshStandardMaterial({color:0x222222})
  const eye1=new THREE.Mesh(new THREE.SphereGeometry(0.07,16,16),eyeMat)
  eye1.position.set(-0.15,3.4,0.48);scene.add(eye1)
  const eye2=eye1.clone();eye2.position.x=0.15;scene.add(eye2)
  const noseMat=new THREE.MeshStandardMaterial({color:0xff8000})
  const nose=new THREE.Mesh(new THREE.ConeGeometry(0.07,0.3,16),noseMat)
  nose.position.set(0,3.3,0.55);nose.rotation.x=Math.PI/2;scene.add(nose)
  for(let i=0;i<3;i++){const btn=new THREE.Mesh(new THREE.SphereGeometry(0.06,16,16),eyeMat)
    btn.position.set(0,2.1-i*0.4,0.7);scene.add(btn)}
  const armMat=new THREE.MeshStandardMaterial({color:0x8b4513})
  const arm1=new THREE.Mesh(new THREE.CylinderGeometry(0.04,0.04,1,8),armMat)
  arm1.position.set(-1,2.5,0);arm1.rotation.z=Math.PI/4;scene.add(arm1)
  const arm2=arm1.clone();arm2.position.set(1,2.5,0);arm2.rotation.z=-Math.PI/4;scene.add(arm2)
  const hatMat=new THREE.MeshStandardMaterial({color:0x222222})
  const brim=new THREE.Mesh(new THREE.CylinderGeometry(0.32,0.32,0.08,32),hatMat)
  brim.position.set(0,3.65,0);scene.add(brim)
  const topHat=new THREE.Mesh(new THREE.CylinderGeometry(0.18,0.18,0.35,32),hatMat)
  topHat.position.set(0,3.85,0);scene.add(topHat)
  function animate(){scene.rotation.y+=0.005;renderer.render(scene,camera);requestAnimationFrame(animate)}
  animate()
})()

// PENCIL
;(() => {
  const canvasDiv=document.getElementById("pencil-canvas")
  if(!canvasDiv)return
  const width=canvasDiv.clientWidth,height=canvasDiv.clientHeight
  const scene=new THREE.Scene()
  const camera=new THREE.PerspectiveCamera(50,width/height,0.1,1000)
  camera.position.set(0,0,7)
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true})
  renderer.setSize(width,height)
  canvasDiv.appendChild(renderer.domElement)
  const dirLight=new THREE.DirectionalLight(0xffffff,1)
  dirLight.position.set(5,5,5)
  scene.add(dirLight,new THREE.AmbientLight(0x555555))
  const bodyMat=new THREE.MeshStandardMaterial({color:0xffd600})
  const body=new THREE.Mesh(new THREE.CylinderGeometry(0.25,0.25,3.5,32),bodyMat)
  scene.add(body)
  const woodMat=new THREE.MeshStandardMaterial({color:0xe0a96d})
  const wood=new THREE.Mesh(new THREE.ConeGeometry(0.25,0.3,32),woodMat)
  wood.position.y=-1.9;wood.rotation.x=Math.PI;scene.add(wood)
  const leadMat=new THREE.MeshStandardMaterial({color:0x222222})
  const lead=new THREE.Mesh(new THREE.ConeGeometry(0.09,0.18,32),leadMat)
  lead.position.y=-2.05;lead.rotation.x=Math.PI;scene.add(lead)
  const eraserMat=new THREE.MeshStandardMaterial({color:0xff8da1})
  const eraser=new THREE.Mesh(new THREE.CylinderGeometry(0.26,0.26,0.22,32),eraserMat)
  eraser.position.y=1.86;scene.add(eraser)
  const ferruleMat=new THREE.MeshStandardMaterial({color:0xc0c0c0,metalness:0.8,roughness:0.3})
  const ferrule=new THREE.Mesh(new THREE.CylinderGeometry(0.27,0.27,0.18,32),ferruleMat)
  ferrule.position.y=1.7;scene.add(ferrule)
  const bandMat=new THREE.MeshStandardMaterial({color:0x222222})
  const band=new THREE.Mesh(new THREE.CylinderGeometry(0.255,0.255,0.05,32),bandMat)
  band.position.y=1.2;scene.add(band)
  function animate(){scene.rotation.y+=0.01;renderer.render(scene,camera);requestAnimationFrame(animate)}
  animate()
})()


function initComparisonSliders() {
  console.log("[v0] Initializing comparison sliders...")
  const sliders = document.querySelectorAll(".comparison-slider")
  console.log("[v0] Found sliders:", sliders.length)

  if (sliders.length === 0) {
    console.log("[v0] No comparison sliders found")
    return
  }

  sliders.forEach((slider, index) => {
    console.log("[v0] Processing slider", index)
    const handle = slider.querySelector(".comparison-slider-handle")
    const afterImage = slider.querySelector(".comparison-after")
    const beforeImage = slider.querySelector(".comparison-before")
    let isDragging = false

    if (!handle || !afterImage || !beforeImage) {
      console.log("[v0] Missing slider elements for slider", index)
      return
    }

    console.log("[v0] Slider elements found for slider", index)

    // Initialize slider at 50% position
    function initializeSlider() {
      console.log("[v0] Initializing slider", index, "at 50%")
      updateSlider(slider.offsetWidth / 2)
      // Make handle visible
      handle.style.opacity = "1"
      handle.style.visibility = "visible"
    }

    function updateSlider(x) {
      const rect = slider.getBoundingClientRect()
      const position = Math.max(0, Math.min(x - rect.left, rect.width))
      const percentage = (position / rect.width) * 100

      handle.style.left = percentage + "%"
      afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`
      console.log("[v0] Updated slider to", percentage + "%")
    }

    // Mouse events
    handle.addEventListener("mousedown", (e) => {
      isDragging = true
      e.preventDefault()
      console.log("[v0] Mouse down on slider", index)
    })

    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        updateSlider(e.clientX)
      }
    })

    document.addEventListener("mouseup", () => {
      if (isDragging) {
        console.log("[v0] Mouse up on slider")
      }
      isDragging = false
    })

    // Touch events
    handle.addEventListener("touchstart", (e) => {
      isDragging = true
      e.preventDefault()
      console.log("[v0] Touch start on slider", index)
    })

    document.addEventListener("touchmove", (e) => {
      if (isDragging && e.touches[0]) {
        updateSlider(e.touches[0].clientX)
        e.preventDefault()
      }
    })

    document.addEventListener("touchend", () => {
      if (isDragging) {
        console.log("[v0] Touch end on slider")
      }
      isDragging = false
    })

    // Click to move
    slider.addEventListener("click", (e) => {
      if (!handle.contains(e.target)) {
        updateSlider(e.clientX)
        console.log("[v0] Clicked to move slider", index)
      }
    })

    // Initialize immediately
    initializeSlider()
  })
}

// Initialize 3D animations
function init3DAnimations() {
  // Placeholder for 3D animation initialization
}

// Initialize everything when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] DOM loaded, initializing...")

  // Check if Three.js is loaded before initializing 3D animations
  if (typeof window.THREE !== "undefined") {
    init3DAnimations()
  }

  // Initialize sliders with a small delay to ensure elements are rendered
  setTimeout(() => {
    initComparisonSliders()
  }, 100)
})


// Contact form functionality
const scriptURL = "https://script.google.com/macros/s/AKfycbySUJRHWiu4JQYACHC1N1gqK2oRRKOxZ16kUIHEZb2G56rBljEj900gQ0YOPkKx7_CLiw/exec"
const form = document.forms["submit-to-google-sheet"]
const msg = document.getElementById("msg")

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(() => {
          msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch((error) => console.error("Error!", error.message))
  })
}

document.querySelectorAll('.work').forEach(work => {
    work.addEventListener('click', () => {
      // Kung gusto mo toggle lang (open/close)
      work.classList.toggle('active');
      });
  });

  document.querySelectorAll('.layer a').forEach(link => {
  link.addEventListener('click', e => {
    e.stopPropagation(); // para hindi magsara/open ulit pag nag-click sa link
  });
});
