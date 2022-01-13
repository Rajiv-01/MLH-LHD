

def sort(array):
    if len(array) > 1:

        # Finding the mid of the array
        mid = len(array)//2

        # Dividing the array elements
        Left = array[:mid]
        Right = array[mid:]

        # Sorting the first half
        sort(Left)

        # Sorting the second half
        sort(Right)

        i = j = k = 0

        while i < len(Left) and j < len(Right):
            if Left[i] < Right[j]:
                array[k] = Left[i]
                i += 1
            else:
                array[k] = Right[j]
                j += 1
            k += 1

        while i < len(Left):
            array[k] = Left[i]
            i += 1
            k += 1

        while j < len(Right):
            array[k] = Right[j]
            j += 1
            k += 1


def printList(array):
    print(array)


if __name__ == "__main__":
    length = int(input("Enter Length of List = "))
    array = list(map(int, input().split(" ")))
    print("Sorted List ")
    sort(array)
    printList(array)
