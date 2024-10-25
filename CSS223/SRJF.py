import random

def shortest_remaining_job_first(processes):
    n = len(processes)
    remaining_times = [proc['burst_time'] for proc in processes]
    complete = 0
    time = 0
    min_time = float('inf')
    shortest = 0
    check = False
    waiting_time = [0] * n
    turnaround_time = [0] * n
    gantt_chart = []

    while complete != n:
        for i in range(n):
            if (processes[i]['arrival_time'] <= time and
                remaining_times[i] < min_time and
                remaining_times[i] > 0):
                min_time = remaining_times[i]
                shortest = i
                check = True

        if not check:
            time += 1
            gantt_chart.append("Idle")
            continue

        gantt_chart.append(f"P{shortest + 1}")
        remaining_times[shortest] -= 1
        min_time = remaining_times[shortest]
        if min_time == 0:
            min_time = float('inf')

        if remaining_times[shortest] == 0:
            complete += 1
            check = False
            finish_time = time + 1
            waiting_time[shortest] = (finish_time - processes[shortest]['burst_time'] - 
                                      processes[shortest]['arrival_time'])
            if waiting_time[shortest] < 0:
                waiting_time[shortest] = 0
            turnaround_time[shortest] = finish_time - processes[shortest]['arrival_time']

        time += 1

    print(f"{'Process':<10}{'Arrival Time':<15}{'Burst Time':<15}{'Waiting Time':<15}{'Turnaround Time':<15}")
    for i in range(n):
        print(f"{i+1:<10}{processes[i]['arrival_time']:<15}{processes[i]['burst_time']:<15}{waiting_time[i]:<15}{turnaround_time[i]:<15}")

    avg_waiting_time = sum(waiting_time) / n
    avg_turnaround_time = sum(turnaround_time) / n
    print(f"\nAverage Waiting Time: {avg_waiting_time}")
    print(f"Average Turnaround Time: {avg_turnaround_time}")

    print("\nGantt Chart:")
    print(" | ".join(gantt_chart))


def get_user_input():
    num_processes = int(input("Enter the number of processes: "))
    processes = []

    for i in range(num_processes):
        arrival_time = int(input(f"Enter Arrival Time for Process {i+1}: "))
        burst_time = int(input(f"Enter Burst Time for Process {i+1}: "))
        processes.append({'arrival_time': arrival_time, 'burst_time': burst_time})

    return processes


def generate_random_processes(num_processes, max_arrival_time, max_burst_time):
    return [
        {'arrival_time': random.randint(0, max_arrival_time), 'burst_time': random.randint(1, max_burst_time)}
        for _ in range(num_processes)
    ]


def main():
    choice = input("Choose input method (1: Manual Input, 2: Random Generation): ")

    if choice == "1":
        processes = get_user_input()
    elif choice == "2":
        num_processes = int(input("Enter the number of processes: "))
        max_arrival_time = int(input("Enter max arrival time: "))
        max_burst_time = int(input("Enter max burst time: "))
        processes = generate_random_processes(num_processes, max_arrival_time, max_burst_time)
    else:
        print("Invalid choice, please enter 1 or 2.")
        return

    shortest_remaining_job_first(processes)


# เรียกใช้งานโปรแกรม
main()
