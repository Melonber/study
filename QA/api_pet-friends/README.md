# Тестирование API сайта PetFriends

# Задание 3 

Методические указание:
IDE: VS Code, Pycharm, Replit
Язык: Python
Библиотека Requests
Фрейворк: Pytest
# Задание:
Зарегистрироваться: https://petfriends1.herokuapp.com
Ознакомиться с документацией API: https://petfriends1.herokuapp.com/apidocs/#/
Написать приложение содержащие функции работы с API реализовать методы:

    GET, 
    POST, 
    PUT, 
    DELETE
    
Написать тесты для функций работы с API

    Тесты должны содержать позитивные и негативные сценарии
    Необходимо сделать параметризацию
    Необходимо использовать фикстуры 
    
Запустить  тесты и сделать скриншот
Создаем файл README.md, с описанием приложения
Загружаем файлы на Github


    
В файле api.py описаны функции работы с API сайта
Получение ключа пользователя по email и password
![image](https://user-images.githubusercontent.com/68331365/147490326-8d2a8155-c0e8-48fd-a5f8-5ab6ccd3d24c.png)
Вывод списка животных которые добавлял пользователь
![image](https://user-images.githubusercontent.com/68331365/147490365-85cde693-18f8-4323-af96-302617cf6ab3.png)
Добавление новой информации о питомце
![image](https://user-images.githubusercontent.com/68331365/147490449-d5ed7629-66d2-4399-8014-2ec0c7ef7dd0.png)
Добавление информации о животном без фотографии
![image](https://user-images.githubusercontent.com/68331365/147490495-0ac1ad47-1059-49f8-a82d-f8e2b5244618.png)
Удаление животного
![image](https://user-images.githubusercontent.com/68331365/147490520-95d96865-862e-4691-9c3c-d9ea40faa770.png)
Добавление доп информации по животному
![image](https://user-images.githubusercontent.com/68331365/147490568-571b308f-bc84-4247-b3e7-c32106f6ab82.png)

В файле test_pet_friend.py описаны 10 тестов для тестирования работаспособности функций API

В файлах variable_with_invalid_data.py и variable_with_valid_data.py описаны данные которые понадобяться для тестирования получения ключа пользователя и вход с валидными и не валидными данными

Проверим работоспособность программы для тестирования с помощью библиотек requests и pytest
![image](https://user-images.githubusercontent.com/68331365/147491277-bfb986a6-837b-49b4-9fff-c2bff3dc7a31.png)


