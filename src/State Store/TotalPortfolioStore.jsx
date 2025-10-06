import { create } from 'zustand'

const useTotalPortfolio = create((set) => ({
    totalValue: 0,
    totalChange: 0,
    initTotalValue: (valToUpdate) => set((state) => ({ totalValue: valToUpdate })),
    initTotalChange: (valToUpdate) => set((state) => ({ totalChange: valToUpdate })),
    updateTotalValue: (valToUpdate) => set((state) => ({ totalValue: state.totalValue + valToUpdate })),
    updateTotalChange: (valToUpdate) => set((state) => ({ totalChange: state.totalChange + valToUpdate }))
}))

export default useTotalPortfolio;
