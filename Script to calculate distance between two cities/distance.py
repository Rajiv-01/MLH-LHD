from geopy.distance import great_circle


City1 = tuple(map(
    float, input("Enter your first Location in Longitude and Latitude = ").split(",")))
City2 = tuple(map(
    float, input("Enter your second Location in Longitude and Latitude = ").split(",")))

try:
    if len(City1) != 2 or len(City2) != 2:
        raise ValueError
except ValueError:
    print("Please enter valid location values for calculating distance")
    exit()

print(great_circle(City1, City2).km)
