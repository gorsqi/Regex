texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

regexNove = Regexp::new('9')
puts regexNove.match(texto)

puts '-' * 50

regexNove = %r{9}
puts regexNove.match(texto)

puts '-' * 50

p regexNove =~ '894'

puts '-' * 50

regexLetras = /[a-f]/
puts texto.scan(regexLetras).join(' ')

puts '-' * 50

puts texto.split(/,/).join

puts '-' * 50

print texto.split(/[aeiou]/)
puts '\n'
puts '-' * 50