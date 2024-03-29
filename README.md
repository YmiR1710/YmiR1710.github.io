### BomberMan
https://ymir1710.github.io/

Тема проекту: створення гри БомберМен за допомогою HTML, CSS та чистого JavaScript.
***
## Управління
 - вверх : W
 - вліво : A
 - вниз : S
 - вправо : D
 - поставити бомбу : ЛКМ
***
## 1 Етап

### Опис проекту: 
Жанр гри - 2D аркада. Гравець знаходиться в лабіринті разом з кількома ворогами. Його ціль - вбити всіх ворогів і знайти двері в наступний рівень. Для виконання цієї цілі він може використовувати бомби, які руйнують стіни та вбивають всіх хто знаходиться в певному радіусі(включно з гравецем)

### Етапи розробки:

1) Пошук та обробка текстур гри.
Знайти готові текстури, які можна було б зразу використовувати досить важко, тому на цьому етапі доведеться провести багато часу в Photoshop.

2) Генерація ігрового поля.
Для кожної ігрової сесії буде генеруватись рандомне поле, тому потрібно дослідити необіхдну частоту спавну певних блоків та придумати алгоритм при якому буде зберігатись іграбельність. Поле буде складатись з html-елементів, вид та відповідна поведінка кожного елемента(wall, floor, brick, player, bomb, enemy) визначається присвоєним css-класом. Ця концепція буде основною при розробці гри.

3) Створенння головного персонажа.
На цьому етапі потрібно буде додати клас player, та реалізувати переміщення блоку цього класу по ігровому полю(фактично не переміщення а обмін класами з сусіднім блоком).

4) Створення ворогів головного персонажа.
Те ж саме що й попередній етап, тільки ворогів буде декілька і переміщатись вони будуть не під управлінням гравця, а рандомно.

5) Взаємодія головного персонажа та його ворогів з ігровим середовищем.
На цьому етапі потрібно додати бомби, які будуть руйнувати деякі блоки і вбивати ворогів. Вороги в свою чергу будуть вбивати головного героя при зіткненні з ним.

6) Перевірка станів ігрового поля.
Необхідно постійно знати, в якому стані зараз гра: виграна, програна чи продовжується. Для цього потрібно перевіряти багато умов і залежно від результату виконати певні дії(показати результат, перезапустити гру і тд.)

7) Тестування гри, внесення певних фіксів та, можливо, додавання певних корисних функцій(наприклад, рівень складності)

### План на 2 етап:
До другого етапу моєю ціллю буде реалізувати перші чотири пункти, вказані вище.
***
## 2 Етап
  ### Виконано:
  1) Пошук та обробка текстур гри.
  2) Генерація ігрового поля.
  3) Створенння головного персонажа.
  4) Створення ворогів головного персонажа.
  5) Взаємодія головного персонажа та його ворогів з ігровим середовищем.
  6) Перевірка станів ігрового поля.
  7) Додавання деяких корисних функцій(частково)
  
  ### План на 3 етап:
  Доробити 7 пункт(тестування, фікси, деякі функції і тд.).
***  
## 3 Етап
  ### Виконано:
  1) Кнопка переходу на наступний рівень.
  2) Повзунок для контролю складності рівня(швидкості ворогів).
  3) Вивід часу проходження.
  4) Фікс деяких багів.
  5) Рефакторинг коду.
  6) Тестування балансу в грі.
  ***  
## Фінальний висновок
  Всі цілі поставленні для проекту виконані, більше того реалізовані ідеї, яких спочатку не було. Єдине, чим я залишився незадоволений - якість деяких текстур
