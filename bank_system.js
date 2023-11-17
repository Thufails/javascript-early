class BankAccount {
    constructor(saldo) {
      this.saldo = saldo || 0;
      document.getElementById('saldo').textContent = this.saldo;
    }
  
    // Metode untuk menunda eksekusi dengan setTimeout
    delayExecution(callback, delayInSeconds) {
      setTimeout(callback, delayInSeconds * 1000);
    }
  
    updateSaldo(saldo){        
        document.getElementById('saldo').textContent = saldo;
    }
    // Metode untuk melakukan deposit
    deposit() {
      const depositAmount = parseFloat(prompt('Masukkan jumlah uang untuk deposit:'));
      if (!isNaN(depositAmount) && depositAmount > 0) {
        this.delayExecution(() => {
          this.saldo += depositAmount;
          alert(`Berhasil menambahkan rekening sebesar Rp${depositAmount}.`);
          this.updateSaldo(this.saldo)
        //   console.log(`Saldo saat ini: Rp${this.saldo}`);
        }, 3);
      } else {
        console.log('Jumlah deposit tidak valid.');
      }
    }
  
    // Metode untuk melakukan withdrawal
    withdraw() {
      const withdrawAmount = parseFloat(prompt('Masukkan jumlah uang untuk penarikan:'));
      if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (this.saldo >= withdrawAmount) {
          this.delayExecution(() => {
            this.saldo -= withdrawAmount;
            alert(`Berhasil mengurangi rekening sebesar Rp${withdrawAmount}.`);
            // console.log(`Saldo saat ini: Rp${this.saldo}`);
            this.updateSaldo(this.saldo)
          }, 3);
        } else {
          console.log('Maaf, saldo tidak cukup.');
        }
      } else {
        console.log('Jumlah penarikan tidak valid.');
      }
    }
  }
  
  // Contoh penggunaan kelas BankAccount
  const myAccount = new BankAccount(1000);
  
