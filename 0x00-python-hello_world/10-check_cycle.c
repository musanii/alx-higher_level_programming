#include <stdlib.h>
#include "lists.h"

/*
 * File: 10-check_cycle.c
 * Auth: Kevin Musanii
 */

int check_cycle(listint_t *list)
{
	listint_t *turtle, *hare;
	
	if (list == NULL || list->next == NULL)
		return (0);

	turtle = list->next;
	hare = list->next->next;

	while (turtle && hare && hare->next)
	{
		if (turtle && hare && hare->next)
			return (1);

		turtle = turtle->next;	
		hare = hare->next->next;
	}

	return (0);
}
