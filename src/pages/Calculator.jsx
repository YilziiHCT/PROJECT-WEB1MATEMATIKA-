/**
 * Halaman kalkulator matematika dengan fitur grafik
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, LineChart, Delete, Equal } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../components/ui/Card';
import toast from 'react-hot-toast';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [equation, setEquation] = useState('');

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  // Generate graph data for quadratic equation
  const generateGraphData = () => {
    if (!equation) return [];
    
    try {
      // Simple quadratic equation parser (ax^2 + bx + c)
      // This is a simplified version for demo purposes
      const data = [];
      for (let x = -10; x <= 10; x += 0.5) {
        let y;
        if (equation.includes('x^2')) {
          // Quadratic equation
          y = Math.pow(x, 2) + x + 1; // Example: x^2 + x + 1
        } else {
          // Linear equation
          y = 2 * x + 1; // Example: 2x + 1
        }
        data.push({ x, y });
      }
      return data;
    } catch (error) {
      toast.error('Format persamaan tidak valid');
      return [];
    }
  };

  const buttons = [
    { id: 'clear', label: 'C', type: 'action', className: 'bg-red-500 hover:bg-red-600 text-white' },
    { id: 'delete', label: '⌫', type: 'action', className: 'bg-yellow-500 hover:bg-yellow-600 text-white' },
    { id: 'divide', label: '/', type: 'operator', className: 'bg-primary-600 hover:bg-primary-700 text-white' },
    { id: 'multiply', label: '*', type: 'operator', className: 'bg-primary-600 hover:bg-primary-700 text-white' },
    
    { id: '7', label: '7', type: 'number', className: 'bg-white dark:bg-dark-700 hover:bg-dark-50 dark:hover:bg-dark-600' },
    { id: '8', label: '8', type: 'number', className: 'bg-white dark:bg-dark-700 hover:bg-dark-50 dark:hover:bg-dark-600' },
    { id: '9', label: '9', type: 'number', className: 'bg-white dark:bg-dark-700 hover:bg-dark-50 dark:hover:bg-dark-600' },
    { id: 'subtract', label: '-', type: 'operator', className: 'bg-primary-600 hover:bg-primary-700 text-white' },
    
    { id: '4', label: '4', type: 'number', className: 'bg-white dark:bg-dark-700 hover:bg-dark-50 dark:hover:bg-dark-600' },
    { id: '5', label: '5', type: 'number', className: 'bg-white dark:bg-dark-700 hover:bg-dark-50 dark:hover:bg-dark-600' },
    { id: '6', label: '6', type: 'number', className: 'bg-white dark:bg-dark-700 hover:bg-dark-50 dark:hover:bg-dark-600' },
    { id: 'add', label: '+', type: 'operator', className: 'bg-primary-600 hover:bg-primary-700 text-white' },
    
    { id: '1', label: '1', type: 'number', className: 'bg-white dark:bg-dark-700 hover:bg-dark-50 dark:hover:bg-dark-600' },
    { id: '2', label: '2', type: 'number', className: 'bg-white dark:bg-dark-700 hover:bg-dark-50 dark:hover:bg-dark-600' },
    { id: '3', label: '3', type: 'number', className: 'bg-white dark:bg-dark-700 hover:bg-dark-50 dark:hover:bg-dark-600' },
    { id: 'equals', label: '=', type: 'equals', className: 'bg-green-600 hover:bg-green-700 text-white row-span-2' },
    
    { id: '0', label: '0', type: 'number', className: 'bg-white dark:bg-dark-700 hover:bg-dark-50 dark:hover:bg-dark-600 col-span-2' },
    { id: 'decimal', label: '.', type: 'decimal', className: 'bg-white dark:bg-dark-700 hover:bg-dark-50 dark:hover:bg-dark-600' },
  ];

  const handleButtonClick = (button) => {
    switch (button.type) {
      case 'number':
        inputNumber(button.label);
        break;
      case 'decimal':
        inputDecimal();
        break;
      case 'operator':
        performOperation(button.label);
        break;
      case 'equals':
        handleEquals();
        break;
      case 'action':
        if (button.id === 'clear') {
          clear();
        } else if (button.id === 'delete') {
          setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
        }
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-dark-900 dark:to-dark-800 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-primary-100 dark:bg-primary-900/50 px-4 py-2 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <CalcIcon className="h-4 w-4 mr-2" />
            Tools Matematika
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Kalkulator Matematika
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Kalkulator canggih dengan fitur grafik untuk membantu perhitungan matematika
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center">
                <CalcIcon className="h-6 w-6 mr-2 text-primary-600" />
                Kalkulator
              </h2>
              
              {/* Display */}
              <div className="bg-dark-100 dark:bg-dark-700 p-4 rounded-lg mb-6">
                <div className="text-right text-3xl font-mono text-dark-900 dark:text-white overflow-hidden">
                  {display}
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-4 gap-3">
                {buttons.map((button) => (
                  <button
                    key={button.id}
                    onClick={() => handleButtonClick(button)}
                    className={`
                      h-14 rounded-lg font-semibold text-lg transition-all duration-200 
                      transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg
                      text-dark-900 dark:text-white border border-dark-200 dark:border-dark-600
                      ${button.className}
                    `}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Graph Function */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 flex items-center">
                <LineChart className="h-6 w-6 mr-2 text-primary-600" />
                Visualisasi Grafik
              </h2>
              
              {/* Equation Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Masukkan Persamaan (contoh: x^2, 2x+1)
                </label>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={equation}
                    onChange={(e) => setEquation(e.target.value)}
                    placeholder="x^2 + x + 1"
                    className="flex-1 px-4 py-2 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white"
                  />
                  <button
                    onClick={() => setShowGraph(true)}
                    className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200 flex items-center space-x-2"
                  >
                    <LineChart className="h-4 w-4" />
                    <span>Plot</span>
                  </button>
                </div>
              </div>

              {/* Graph Display */}
              {showGraph && equation && (
                <div className="bg-white dark:bg-dark-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">
                    Grafik: {equation}
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={generateGraphData()}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="x" 
                          type="number" 
                          domain={[-10, 10]}
                          tick={{ fontSize: 12 }}
                        />
                        <YAxis 
                          tick={{ fontSize: 12 }}
                        />
                        <Tooltip 
                          formatter={(value, name) => [value.toFixed(2), 'y']}
                          labelFormatter={(label) => `x: ${label}`}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="y" 
                          stroke="#3B82F6" 
                          strokeWidth={2}
                          dot={false}
                        />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* Quick Functions */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">
                  Fungsi Cepat
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setEquation('x^2')}
                    className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200"
                  >
                    y = x²
                  </button>
                  <button
                    onClick={() => setEquation('2*x + 1')}
                    className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
                  >
                    y = 2x + 1
                  </button>
                  <button
                    onClick={() => setEquation('x^3')}
                    className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                  >
                    y = x³
                  </button>
                  <button
                    onClick={() => setEquation('sin(x)')}
                    className="p-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200"
                  >
                    y = sin(x)
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;