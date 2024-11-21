/* eslint-disable */
import type { Prisma, CompetitionEntry } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateCompetitionEntry(options?: Omit<(UseMutationOptions<(CompetitionEntry | undefined), DefaultError, Prisma.CompetitionEntryCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CompetitionEntryCreateArgs, DefaultError, CompetitionEntry, true>('CompetitionEntry', 'POST', `${endpoint}/competitionEntry/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CompetitionEntryCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CompetitionEntryCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, CompetitionEntry, Prisma.CompetitionEntryGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CompetitionEntryCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, CompetitionEntry, Prisma.CompetitionEntryGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyCompetitionEntry(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CompetitionEntryCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CompetitionEntryCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('CompetitionEntry', 'POST', `${endpoint}/competitionEntry/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CompetitionEntryCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CompetitionEntryCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CompetitionEntryCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyCompetitionEntry<TArgs extends Prisma.CompetitionEntryFindManyArgs, TQueryFnData = Array<Prisma.CompetitionEntryGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CompetitionEntryFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CompetitionEntry', `${endpoint}/competitionEntry/findMany`, args, options, fetch);
}

export function useInfiniteFindManyCompetitionEntry<TArgs extends Prisma.CompetitionEntryFindManyArgs, TQueryFnData = Array<Prisma.CompetitionEntryGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CompetitionEntryFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('CompetitionEntry', `${endpoint}/competitionEntry/findMany`, args, options, fetch);
}

export function useSuspenseFindManyCompetitionEntry<TArgs extends Prisma.CompetitionEntryFindManyArgs, TQueryFnData = Array<Prisma.CompetitionEntryGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CompetitionEntryFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CompetitionEntry', `${endpoint}/competitionEntry/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyCompetitionEntry<TArgs extends Prisma.CompetitionEntryFindManyArgs, TQueryFnData = Array<Prisma.CompetitionEntryGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CompetitionEntryFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('CompetitionEntry', `${endpoint}/competitionEntry/findMany`, args, options, fetch);
}

export function useFindUniqueCompetitionEntry<TArgs extends Prisma.CompetitionEntryFindUniqueArgs, TQueryFnData = Prisma.CompetitionEntryGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CompetitionEntryFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CompetitionEntry', `${endpoint}/competitionEntry/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueCompetitionEntry<TArgs extends Prisma.CompetitionEntryFindUniqueArgs, TQueryFnData = Prisma.CompetitionEntryGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CompetitionEntryFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CompetitionEntry', `${endpoint}/competitionEntry/findUnique`, args, options, fetch);
}

export function useFindFirstCompetitionEntry<TArgs extends Prisma.CompetitionEntryFindFirstArgs, TQueryFnData = Prisma.CompetitionEntryGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CompetitionEntryFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CompetitionEntry', `${endpoint}/competitionEntry/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstCompetitionEntry<TArgs extends Prisma.CompetitionEntryFindFirstArgs, TQueryFnData = Prisma.CompetitionEntryGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CompetitionEntryFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CompetitionEntry', `${endpoint}/competitionEntry/findFirst`, args, options, fetch);
}

export function useUpdateCompetitionEntry(options?: Omit<(UseMutationOptions<(CompetitionEntry | undefined), DefaultError, Prisma.CompetitionEntryUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CompetitionEntryUpdateArgs, DefaultError, CompetitionEntry, true>('CompetitionEntry', 'PUT', `${endpoint}/competitionEntry/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CompetitionEntryUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CompetitionEntryUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, CompetitionEntry, Prisma.CompetitionEntryGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CompetitionEntryUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, CompetitionEntry, Prisma.CompetitionEntryGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyCompetitionEntry(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CompetitionEntryUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CompetitionEntryUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('CompetitionEntry', 'PUT', `${endpoint}/competitionEntry/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CompetitionEntryUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CompetitionEntryUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CompetitionEntryUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertCompetitionEntry(options?: Omit<(UseMutationOptions<(CompetitionEntry | undefined), DefaultError, Prisma.CompetitionEntryUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CompetitionEntryUpsertArgs, DefaultError, CompetitionEntry, true>('CompetitionEntry', 'POST', `${endpoint}/competitionEntry/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CompetitionEntryUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.CompetitionEntryUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, CompetitionEntry, Prisma.CompetitionEntryGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CompetitionEntryUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, CompetitionEntry, Prisma.CompetitionEntryGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteCompetitionEntry(options?: Omit<(UseMutationOptions<(CompetitionEntry | undefined), DefaultError, Prisma.CompetitionEntryDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CompetitionEntryDeleteArgs, DefaultError, CompetitionEntry, true>('CompetitionEntry', 'DELETE', `${endpoint}/competitionEntry/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CompetitionEntryDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.CompetitionEntryDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, CompetitionEntry, Prisma.CompetitionEntryGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CompetitionEntryDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, CompetitionEntry, Prisma.CompetitionEntryGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyCompetitionEntry(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CompetitionEntryDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CompetitionEntryDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('CompetitionEntry', 'DELETE', `${endpoint}/competitionEntry/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CompetitionEntryDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CompetitionEntryDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CompetitionEntryDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateCompetitionEntry<TArgs extends Prisma.CompetitionEntryAggregateArgs, TQueryFnData = Prisma.GetCompetitionEntryAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CompetitionEntryAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CompetitionEntry', `${endpoint}/competitionEntry/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateCompetitionEntry<TArgs extends Prisma.CompetitionEntryAggregateArgs, TQueryFnData = Prisma.GetCompetitionEntryAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.CompetitionEntryAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CompetitionEntry', `${endpoint}/competitionEntry/aggregate`, args, options, fetch);
}

export function useGroupByCompetitionEntry<TArgs extends Prisma.CompetitionEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.CompetitionEntryGroupByArgs['orderBy'] } : { orderBy?: Prisma.CompetitionEntryGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.CompetitionEntryGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.CompetitionEntryGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.CompetitionEntryGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.CompetitionEntryGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.CompetitionEntryGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CompetitionEntry', `${endpoint}/competitionEntry/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByCompetitionEntry<TArgs extends Prisma.CompetitionEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.CompetitionEntryGroupByArgs['orderBy'] } : { orderBy?: Prisma.CompetitionEntryGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.CompetitionEntryGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.CompetitionEntryGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.CompetitionEntryGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.CompetitionEntryGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.CompetitionEntryGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CompetitionEntry', `${endpoint}/competitionEntry/groupBy`, args, options, fetch);
}

export function useCountCompetitionEntry<TArgs extends Prisma.CompetitionEntryCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.CompetitionEntryCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CompetitionEntryCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('CompetitionEntry', `${endpoint}/competitionEntry/count`, args, options, fetch);
}

export function useSuspenseCountCompetitionEntry<TArgs extends Prisma.CompetitionEntryCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.CompetitionEntryCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.CompetitionEntryCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('CompetitionEntry', `${endpoint}/competitionEntry/count`, args, options, fetch);
}

export function useCheckCompetitionEntry<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; name?: string; competitionId?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('CompetitionEntry', `${endpoint}/competitionEntry/check`, args, options, fetch);
}
