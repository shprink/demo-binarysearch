fs				= require 'fs'
CoffeeScript	= require 'coffee-script'

# namespace entity
UnitTest		= require 'unit-test' 
# the test runner
TestSuite		= UnitTest.Suite
# selection of assertions to use in tests
Assertions		= UnitTest.Assertions

task 'build', 'CoffeeScript to Js', ->
	try
		# Get the coffee source
		coffee = "#{fs.readFileSync 'binarysearch.coffee'}"

		# Compile the Coffee source to JS
		js = CoffeeScript.compile coffee

		# Write the JS file from the compiled Coffee
		fs.writeFileSync 'binarysearch.js', js
	catch e
		console.log e.message

task 'tests', 'Run unit tests', ->
	# run specifically named test files
	TestSuite.namedFiles 'test.js'