while (true) {
    console.log(input.rotation(Rotation.Pitch))
    if (Math.abs(input.rotation(Rotation.Pitch)) > 2) {
        light.setAll(light.rgb(255, 0, 255))
    } else {
        light.clear()
    }
    
    console.log(input.acceleration(Dimension.X))
    console.log(input.acceleration(Dimension.Y))
    console.log(input.acceleration(Dimension.Z))
}
