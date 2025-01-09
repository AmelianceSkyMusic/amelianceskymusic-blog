---
tags:
   - obsidian
title: Obsidian. Синхронізація. Android
date: 2025-01-08
time: 18:10
categories:
   - other
published: true
---

<!-- # Obsidian. Синхронізація. Android -->

<!-- --- -->

## Створення сховища

1. Створюємо репозиторій для сховища
2. Клонуємо на ПК
3. Репозиторій Obsidian повинен бути клонований як https, перевірити можна за допомогою команди git remote -v.
   Якщо репозиторій не origin https... потрібно конвертувати (як показано нижче)

   ```
   $ cd ~/Notes-https
   $ git remote -v
   > origin  git@github.com:OWNER/REPOSITORY.git (fetch)
   > origin  git@github.com:OWNER/REPOSITORY.git (push)

   $ git remote set-url origin https://github.com/OWNER/REPOSITORY.git

   # Verify new remote URL
   $ git remote -v
   origin  https://github.com/OWNER/REPOSITORY.git (fetch)
   origin  https://github.com/OWNER/REPOSITORY.git (push)
   ```

## Створюємо токен

1. [Створюємо токен](https://github.com/settings/tokens?type=beta)
2. Надаємо доступи
   | Permission | Access Level |
   | --------------- | -------------- |
   | Metadata | Read-only |
   | Commit statuses | Read and write |
   | Contents | Read and write |

## Створюємо сховище

1. Встановлюємо Obsidian
2. Відкриваємо клонований репозиторій як сховище через Obsidian, щоб ініціалізувати сховище
3. Додаємо плагін Git

## На телефоні

1. Копіюємо папку з сховищем (де лежать .git та .obsidian) на телефон (в будь яке місце)
2. Виконуємо Pull через швидкі команди (відкриваємо будь який файл та свайпаємо вниз)
3. Вводимо юзернейм (напр. Ameliance SkyMusic) та токен

## Тест

1. Змінити на телефоні нотатку
2. Запустити через палітру команд Obsidian Git: Commit all changes
3. Запустити через палітру команд Obsidian Git: Push
4. Перевірити гіт

# .

---

###### RESOURCES:

-  https://www.reddit.com/r/ObsidianMD/comments/17odzjb/obsidian_android_syncing_via_github_in_2023/

<!-- ###### LINKS:

-  [[Obsidian →]]

###### BACKLINKS:

```dataview
LIST WITHOUT ID InLinks
WHERE file.path = this.file.path
FLATTEN file.inlinks AS InLinks
SORT InLinks.file.name ASC
``` -->
