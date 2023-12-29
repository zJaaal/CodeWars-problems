# Introduction
You need to write a function that will format a phone number by a template.
# Task
You're given number and string.

If there are more digits than needed, they should be ignored

if there are less digits than needed, should return `Invalid phone number`

# Examples
```python
(79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
(79052479075, "+# (###) ### ##-##") => "+7 (905) 247 90-75"
(79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
(81237068908090, "+## ### ### ## ##") => "+81 237 068 90 80"
(8123706890, "+## ### ### ##-##") => "Invalid phone number"
(911, "###") => "911"
(112, "+ () -") => "+ () -"
```

---
## Check 'Format phone number' series:
[Format phone number by template](https://www.codewars.com/kata/61393fd03e441f001ac9c7d4)

[Format phone number - Mobile App](https://www.codewars.com/kata/613b369bd0b62f003e8b8c03)