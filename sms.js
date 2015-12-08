You are working on a system which needs to send SMS to customers.
You have found a provider which sends the SMS for you with a function Provider.send(text).
However the text variable should not be more than 160 character long.
If you want to send a longer sms you need to put at the end of the sms « - part 1 of XX »
where XX is the total number of part. Watch out, the extra string is part of the 160 character. 
You need to write a function send_sms which takes a string of any size and sends it.

" - part 1 of 1" -> 14 char
" - part 1 of 10" -> 15 char
" - part 10 of 10" -> 16 char

ex :

540 char :
540 / 160 = 3.375
3 < 10
3 * 14 = 42
540 + 42 = 582
582 / 160 = 3.6375
--> we need 4 SMS

160 char :
160 / 160 = 1
160 + 14 = 174
174 / 160 = 1.0875
--> we need 2 SMS

charSupp += " - part " + i + " of " + nbSMS