  export function filterByDate(transactions, date) {
    return transactions.filter(transaction => transaction.dateOfTransaction.includes(date));
  }

  export function convertToDictionary(transactions) {
    const dictionary = {"shopping":0,"entertainment":0,"bank":0,"income":0,"expense":0,"investment":0,"other":0};
  
    transactions.forEach(transaction => {
      if(transaction.type == "CREDIT"){
        dictionary["income"]+=parseFloat(transaction.amount);
      }else{
        dictionary[classifyCategories(transaction.categoryCode)]+=parseFloat(transaction.amount);
      }
    });

    return dictionary;
  }

  export function classifyCategories(category) {
    // SALARY" "EMI" "LOAN_DISBURSAL" "BOUNCED_IW_ECS" "BOUNCE_TRANSACTION" "BOUNCED_IW_CHEQUE" 
    // "BOUNCED_OW_CHEQUE" "IW_CHEQUE_BOUNCE_CHARGE" "OW_CHEQUE_BOUNCE_CHARGE" "BOUNCED_IW_ECS_CHARGE" 
    // "BOUNCE_CHARGE" "TAX_PAYMENT" "TRANSFER_TO_WALLET" "TRANSFER_FROM_WALLET_TO_BANK" "CASH_WITHDRAWAL" 
    // "MINIMUM_BALANCE_CHARGE" "BANK_CHARGE" "TRANSFER_TO_FD_RD" "INTEREST_COLLECTED" "SALARY_PAID" "CREDIT_CARD_PAYMENT" 
    // "ALCOHOL" "SMALL_SAVINGS" "INTEREST_CREDIT" "CASH_DEPOSIT" "REVERSAL_TXN" "CASH_BACK" "SUBSIDY" "PF_WITHDRAWAL" 
    // "MICROFINANCE" "FOODTRANSPORTATIONENTERTAINMENT" "GAMBLING_AND_BETTING" "SHOPPING" "UTILITIESINVESTMENT_INCOME" "INVESTMENT_EXPENSE" 
    // "HEALTHCAREINSURANCE_PREMIUM" "INSURANCE_CLAIMED" "RENT" "PURCHASE_BY_CARD" "TRANSFER_INTRANSFER_OUTDONATION" "PERSONAL_CARE"
    // Salary,CAHBACK  EMI,LOADN,BANK,   
  
      const shopping = ["SHOPPING", "PURCHASE_BY_CARD"];
      const entertainment = ["ALCOHOL", "FOODTRANSPORTATIONENTERTAINMENT", "GAMBLING_AND_BETTING"];
      const bank = ["LOAN_DISBURSAL", "BOUNCED_IW_ECS", "BOUNCE_TRANSACTION", "BOUNCED_IW_CHEQUE", "BOUNCED_OW_CHEQUE", "IW_CHEQUE_BOUNCE_CHARGE", "OW_CHEQUE_BOUNCE_CHARGE", "BOUNCED_IW_ECS_CHARGE", "BOUNCE_CHARGE", "TRANSFER_TO_WALLET", "TRANSFER_FROM_WALLET_TO_BANK", "CASH_WITHDRAWAL", "MINIMUM_BALANCE_CHARGE", "BANK_CHARGE", "TRANSFER_TO_FD_RD", "CREDIT_CARD_PAYMENT", "CASH_DEPOSIT", "REVERSAL_TXN", "PF_WITHDRAWAL", "INSURANCE_PREMIUM", "INSURANCE_CLAIMED", "TRANSFER_INTRANSFER_OUTDONATION"];
      const investment = ["SMALL_SAVINGS", "INVESTMENT_INCOME", "INVESTMENT_EXPENSE"];
      const income = ["SALARY", "INTEREST_COLLECTED", "SALARY_PAID", "CASH_BACK", "SUBSIDY"];
      const expense = ["EMI", "TAX_PAYMENT",    "UTILITIES", "HEALTHCARE", "RENT",  "PERSONAL_CARE"];
      if(shopping.includes(category)){
        return "shopping";
      }else if(entertainment.includes(category)){
        return "entertainment";
      }else if(bank.includes(category)){
        return "bank";
      }else if(investment.includes(category)){
        return "investment";
      }else if(income.includes(category)){
        return "income";
      }
      else if(expense.includes(category)){
        return "expenses";
      }else{
        return "other";
      }
    } 