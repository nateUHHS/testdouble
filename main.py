while True:

    print(input.rotation(Rotation.PITCH))
    if abs(input.rotation(Rotation.PITCH)) > 2:
        light.set_all(light.rgb(255, 0, 255))
    else:
        light.clear()

    print(input.acceleration(Dimension.X))
    print(input.acceleration(Dimension.Y))
    print(input.acceleration(Dimension.Z))

    

