"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ThreeDBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 30

    // Create floating spheres
    const spheres: THREE.Mesh[] = []
    const geometry = new THREE.IcosahedronGeometry(2, 4)

    for (let i = 0; i < 5; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: Math.random() * 0xffffff,
        wireframe: true,
      })
      const sphere = new THREE.Mesh(geometry, material)
      sphere.position.set((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100)
      scene.add(sphere)
      spheres.push(sphere)
    }

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1)
    light.position.set(10, 10, 10)
    scene.add(light)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      spheres.forEach((sphere) => {
        sphere.rotation.x += 0.001
        sphere.rotation.y += 0.001
        sphere.position.z += Math.sin(Date.now() * 0.0001) * 0.1
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 z-0 opacity-20 pointer-events-none" />
}
