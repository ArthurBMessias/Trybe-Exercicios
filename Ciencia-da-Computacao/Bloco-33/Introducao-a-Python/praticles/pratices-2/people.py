import area


PEOPLE_AT_CONCERT_PER_SQUARE_METER = (
    2  # numero de pessoas por metro quadrado em média
)
FIELD_LENGTH = 240  # em metros
FIELD_WIDTH = 45  # em metros
PEOPLE_AT_CONCERT = (
    area.rectangle(FIELD_LENGTH, FIELD_WIDTH)
    // PEOPLE_AT_CONCERT_PER_SQUARE_METER
)


# ...


if __name__ == "__main__":
    print("Área do quadrado:", area.square(10))
    print("Área do retângulo:", area.rectangle(2, 2))
    print("Área do círculo:", area.circle(3))
